import { useState } from "react"
import { useTodo } from "../context/todo-context"


const useCount = () => {
  const [todoList] = useTodo()
	const [count, setCount] = useState(todoList.length)

	const onAddCount = () => {
		setCount(count + 1)
	}

	return { count, onAddCount }
}

export default useCount
