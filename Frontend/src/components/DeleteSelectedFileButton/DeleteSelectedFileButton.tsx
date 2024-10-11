import { DefaultButton } from '../DefaultButton/DefaultButton'
import { deleteSelectedFileButtonProps } from './DeleteSelectedFileButtonType'

export const DeleteSelectedFileButton = ({
  clearFileAndNotification,
}: deleteSelectedFileButtonProps) => {
  const handleClearClick = () => clearFileAndNotification()

  return (
    <DefaultButton styles="btn btn-sm btn-danger" onClick={handleClearClick}>
      X
    </DefaultButton>
  )
}
