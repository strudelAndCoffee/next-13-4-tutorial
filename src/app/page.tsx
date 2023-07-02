import TodoItem from '@/components/TodoItem'
import { prisma } from '@/db'
import Link from 'next/link'

function getTodos() {
  return prisma.todo.findMany()
}

export default async function Home() {
  const todos = await getTodos()

  return (
    <>
      <header>
        <h1>Todos</h1>
        <Link href="/new">New</Link>
      </header>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>
    </>
  )
}
