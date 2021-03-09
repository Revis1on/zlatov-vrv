import React from 'react'
import uploadForm from '../UploadForm/uploadForm'
import { RockContainer, RockWrapper } from './RockCatalogElements'

function RockCatalog() {
    return (
        <RockContainer>
        <RockWrapper>
                <uploadForm />
        </RockWrapper>
    </RockContainer>
    )
}

export default RockCatalog
