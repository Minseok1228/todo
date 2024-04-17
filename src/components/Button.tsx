import { ComponentProps } from "react"

interface ButtonProps extends ComponentProps<"button"> {}
//프롭스 받아서 프롭스에 따른 조건부스타일링
function Button({children,...props}:ButtonProps) {
  return (
<button {...props}>
    {children}
</button>
    )
}

export default Button