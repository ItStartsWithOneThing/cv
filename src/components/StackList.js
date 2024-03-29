
import React from 'react'

export default function StackList({techStack, techStackIcons}) {
  return (
    <ul>
        {
            techStack.map((item, idx) => (
                <li >
                    <span hint={item}>
                        <div className='stack-icon-text' >
                            {techStackIcons[idx]}
                        </div>
                    </span>
                </li>
            ))
        }
    </ul>
  )
}