import { PageContainer } from '@keystone-6/core/admin-ui/components'
import React, { useState } from 'react'

const deploySite = async () => {
  const buildHookUrl = process.env.REACT_APP_BUILD_HOOK_URL
  if (!buildHookUrl) return { ok: false }

  return fetch(buildHookUrl, { method: 'POST' })
}

enum Status {
  Idle = 'idle',
  Loading = 'loading',
  Error = 'error',
  Success = 'success',
}
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
        return <button onClick={handleClick}>Deploy the Site!</button>

      case Status.Error:
        return <p>Well that didn't work. Tell Mark about it.</p>

      case Status.Success:
        return <p>Nice! It worked. The site is deploying now and will be ready to view shortly.</p>

      case Status.Loading:
        return <p>Loading...</p>
    }
  }

  return <PageContainer header="Deploy Website">{renderContent()}</PageContainer>
}

export default Deploy