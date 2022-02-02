/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@keystone-ui/core'

export const Logo = () => {
  return <a css={{
    background: 'linear-gradient(to right, rgb(0, 0, 0), rgb(185, 185, 185))',
    backgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textDecoration: 'none',
    fontSize: '24px',
    fontWeight: '600',
    ":hover": {
      background: 'linear-gradient(to right, #390073, #E0C6FF)',
      backgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      textDecoration: 'none',
    }
  }}
    href="https://mantrapercussion.org"
  >Mantra Percussion</a>
}

