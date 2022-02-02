import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { models } from 'powerbi-client'
import { PowerBIEmbed } from 'powerbi-client-react'

import { getReportData } from './../../state/powerbi/powerbiActions'

const Report = ({ workspaceId, reportId, sectionId }) => {
  const dispatch = useDispatch()

  const { accessToken, embedUrl, loading } = useSelector(state => state.powerbi)

  const { workspaces } = useSelector(state => state.workspaces)
  const { sections } = useSelector(state => state.sections)
  const { reports } = useSelector(state => state.reports)

  const pbiGroupId = workspaces.find(
    workspace => workspace.id === workspaceId
  ).pbiGroupId

  const pbiReportId = reports.find(report => report.id === reportId).pbiReportId

  const pbiSectionId = sections.find(
    section => section.id === sectionId
  ).pbiSectionId

  const pbiSectionName = sections.find(
    section => section.id === sectionId
  ).pbiSectionId

  useEffect(() => {
    dispatch(getReportData(pbiGroupId, pbiReportId))
  }, [pbiGroupId, pbiReportId])

  if (!accessToken || !embedUrl || loading) return <div>Cargando...</div>

  console.log('pbiReportId', pbiReportId)

  return (
    <>
      <PowerBIEmbed
        embedConfig={{
          type: 'report',
          id: pbiReportId,
          embedUrl,
          accessToken,
          tokenType: models.TokenType.Aad,
          settings: {
            filterPaneEnabled: false,
            navContentPaneEnabled: false,
            panes: {
              filters: {
                expanded: true,
                visible: true,
              },
            },
            background: models.BackgroundType.Transparent,
          },
          pageName: `ReportSection${pbiSectionId}`,
        }}
        eventHandlers={
          new Map([
            [
              'loaded',
              function () {
                console.log('Report loaded')
              },
            ],
            [
              'rendered',
              function () {
                console.log('Report rendered')
              },
            ],
            [
              'error',
              function (event) {
                console.log('PowerBI Error:', event.detail)
              },
            ],
          ])
        }
        cssClassName={'report-container'}
        getEmbeddedComponent={embeddedReport => {
          window.report = embeddedReport
        }}
      />
    </>
  )
}

export default Report
