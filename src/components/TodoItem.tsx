type TodoItemProps = {
  id: string
  title: string
  complete: boolean
}

export default function TodoItem({ id, title, complete }: TodoItemProps) {
  return (
    <li>
      <input id={id} type="checkbox" />
      <label htmlFor={id}>{title}</label>
    </li>
  )
}
