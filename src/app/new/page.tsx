import { prisma } from '@/db'
import { redirect } from 'next/navigation'
import Link from 'next/link'

async function createTodo(data: FormData) {
  'use server'

  const title = data.get('title')?.valueOf()
  if (typeof title !== 'string' || title.length === 0) {
    throw new Error('invalid Title')
  }

  await prisma.todo.create({ data: { title, complete: false } })
  redirect('/')
}

export default function Page() {
  return (
    <>
      <header>
        <h1>New</h1>
      </header>
      <form action={createTodo}>
        <input type="text" name="title" />
        <div>
          <Link href="..">Cancel</Link>
          <button type="submit">Create</button>
        </div>
      </form>
    </>
  )
}
