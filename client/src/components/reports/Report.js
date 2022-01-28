import React from 'react'
import { useSelector } from 'react-redux'

import { models } from 'powerbi-client'
import { PowerBIEmbed } from 'powerbi-client-react'

const Report = ({ groupId, reportId }) => {
  const { accessToken, embedUrl, loading } = useSelector(state => state.powerbi)

  if (!accessToken || !embedUrl || loading) return <div>Cargando...</div>

  return (
    <>
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
    </>
  )
}

export default Report
