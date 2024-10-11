import React from 'react'
import { DownloadButtonType } from './DownloadButtonType'

export const DownloadButton = ({
  nameFunction,
  downloadFunction,
  audioFile,
  editableText,
}: DownloadButtonType) => {
  return (
    <>
      <button
        className="btn btn-primary m-1"
        onClick={() => downloadFunction({ audioFile, editableText })}
      >
        {nameFunction}
      </button>
    </>
  )
}
