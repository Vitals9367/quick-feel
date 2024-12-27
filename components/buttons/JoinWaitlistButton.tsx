import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

interface JoinWaitlistButtonProps {
    text?: string
}


const JoinWaitlistButton: React.FC<JoinWaitlistButtonProps> = ({text = "Join Waitlist"}) => {
  return (
    <Button asChild className='bg-[var(--primary)] rounded text-white hover:text-[var(--primary)] hover:bg-white text-base'>
        <Link href="/#waitlist">{text}</Link>
    </Button>
  )
}

export default JoinWaitlistButton