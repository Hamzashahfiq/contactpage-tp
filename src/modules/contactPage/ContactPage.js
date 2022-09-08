import React from 'react'
import { CP } from './ContactPageStyle'
import techlogo from '../../assets/logo.png'

export default function ContactPage() {
    return (
        <CP.MainDiv>
            <CP.LogoDiv>
                <CP.logoImg src={techlogo} />
            </CP.LogoDiv>
        </CP.MainDiv>
    )
}
