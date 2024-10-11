export type SelectFileProps = {
  handleDrop: (event: React.DragEvent<HTMLLabelElement>) => void
  handleDragOver: (event: React.DragEvent<HTMLLabelElement>) => void
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
