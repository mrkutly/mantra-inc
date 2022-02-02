// admin/config.tsx
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@keystone-ui/core'

export const Logo = () => {
  return <a css={{
    background: 'linear-gradient(to right, rgb(0, 0, 0), rgb(185, 185, 185))',
    backgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    ":hover": {
      background: 'linear-gradient(90deg, #EE2F9E 0%, #BC2FEE 100%)',
    }
  }}
    href="https://mantrapercussion.org"
  >Mantra Percussion</a>
}

