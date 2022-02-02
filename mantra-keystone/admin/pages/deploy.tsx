/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@keystone-ui/core'
import { PageContainer } from '@keystone-6/core/admin-ui/components'
import React, { useState } from 'react'
import process from 'process'

const deploySite = async () => {
  const buildHookUrl = process.env.NEXT_PUBLIC_BUILD_HOOK_URL
  if (!buildHookUrl) return { ok: false }

  return fetch(buildHookUrl, { method: 'POST' })
}

enum Status {
  Idle = 'idle',
  Loading = 'loading',
  Error = 'error',
  Success = 'success',
}

const buttonCss = {
  alignItems: 'center',
  borderStyle: 'solid',
  boxSizing: 'border-box',
  cursor: 'pointer',
  display: 'inline-flex',
  flexShrink: 0,
  justifyContent: 'center',
  outline: 0,
  position: 'relative',
  userSelect: 'none',
  whiteSpace: 'nowrap',
  backgroundColor: '#2563eb',
  borderColor: 'transparent',
  borderRadius: '4px',
  borderWidth: '1px',
  color: '#ffffff',
  fontSize: '0.875rem',
  fontWeight: 500,
  height: '32px',
  paddingLeft: '12px',
  paddingRight: '12px',
  ':active': {
    background: '#1e40af',
  },
  ':hover': {
    background: '#1d4ed8',
  },
  ':focus': {
    boxShadow: '0 0 0 2px #bfdbfe',
  }
} as any

const Deploy = () => {
  const [status, setStatus] = useState<Status>(Status.Idle)

  const handleClick = async () => {
    try {
      setStatus(Status.Loading)
      const result = await deploySite()

      if (result.ok) setStatus(Status.Success)
      else setStatus(Status.Error)
    } catch (error) {
      setStatus(Status.Error)
    }
  }

  const renderContent = () => {
    switch (status) {
      case Status.Idle:
        return (<div>
          <p>To rebuild the site with updated data, click the button below.</p>
          <button type="button" css={buttonCss} onClick={handleClick}>Deploy the Site!</button>
        </div>)

      case Status.Error:
        return <p>Well that didn't work. Tell Mark about it.</p>

      case Status.Success:
        return <p>Nice! It worked. The site is deploying now and will be ready to view shortly.</p>

      case Status.Loading:
        return <p>Loading...</p>
    }
  }

  return <PageContainer header="Deploy Website">
    <div style={{ margin: '24px' }}>

      {renderContent()}
    </div>
  </PageContainer>
}

export default Deploy