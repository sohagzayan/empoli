import React from 'react'
import PropTypes from 'prop-types'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'

const GetTooltip = ({ tooltipContent, children }: any) => {
    return (
        <Tooltip>
            <TooltipTrigger asChild>
                {children}
            </TooltipTrigger>
            <TooltipContent>
                <p>{tooltipContent}</p>
            </TooltipContent>
        </Tooltip>
    )
}

export default GetTooltip