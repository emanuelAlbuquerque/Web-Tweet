import { clsx } from 'clsx'
import { ReactNode } from 'react'
import { TabBarItem } from './TabBarItem'

export interface TabBarProps{
  isDark?: boolean
}

export function TabBar({isDark}: TabBarProps){
  return(
    <ul className={clsx(
        'flex justify-between items-center text-dark-5 w-full border-b-[1px] border-white dark:text-dark-6 dark:border-black', 
        {'text-dark-6':isDark, 
        'border-black': isDark
      })}
    >
      <TabBarItem>
        Tweets
      </TabBarItem>
      <TabBarItem>
        Tweets & replies
      </TabBarItem>
      <TabBarItem>
        Media
      </TabBarItem>
      <TabBarItem>
        Likes
      </TabBarItem>
    </ul>
  )
}