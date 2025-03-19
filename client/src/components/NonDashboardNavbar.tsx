"use client"
import { Bell, BookOpen } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const NonDashboardNavbar = () => {
  return (
    <nav className='nondashboard-navbar'>
        {/* the __subject way of writing components is called block element modifiers */}
        <div  className='nondashboard-navbar__container'>
            <div className='nondashboard-navbar__search'>
                <Link href="/"  className='nondashboard-navbar__brand'> 
                    Learn-rl
                </Link>
                <div className='flex items-center gap-4'>
                    <div  className='relative group flex items-center'>
                        <Link href="/search"  className='nondashboard-navbar__search-input'>
                            <span className='hidden sm:inline'>Search Courses</span>
                            <span className='sm:hidden'>Search</span>
                        </Link>
                        <BookOpen
                            className='nondashboard-navbar__search-icon'
                            size={18} />
                    </div>
                </div>
            </div>
        </div>
        <div className='nondashboard-navbar__actions'>
            <button className='nondashbnoard-navbar__notification-button relative'>
                <Bell className='nondashboard-navbar__notification-icon'/>
            </button>

            {/* SIGN IN & SIGN UP buttons*/}
        </div>
    </nav>
  )
}

export default NonDashboardNavbar