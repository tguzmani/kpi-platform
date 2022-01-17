import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getReportData } from './../state/powerbi/powerbiActions'

import { models } from 'powerbi-client'
import { PowerBIEmbed } from 'powerbi-client-react'

const ReportsPage = () => {
  const { accessToken, embedUrl, loading } = useSelector(state => state.powerbi)

  const dispatch = useDispatch()

  const groupId = 'f215dfe5-f4a3-44cc-a0f5-fa3de238411e'
  const reportId = 'aa463810-c45c-4cab-a926-0ed948d7c62a'

  React.useEffect(() => {
    dispatch(getReportData(groupId, reportId))
  }, [])

  if (!accessToken || !embedUrl || loading) return <div>Loading...</div>

  return (
    <div>
      <PowerBIEmbed
        embedConfig={{
          type: 'report',
          id: reportId,
          embedUrl,
          accessToken,
          tokenType: models.TokenType.Aad,
          settings: {
            panes: {
              filters: {
                expanded: false,
                visible: false,
              },
            },
            background: models.BackgroundType.Transparent,
          },
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
    </div>
  )
}

export default ReportsPage
