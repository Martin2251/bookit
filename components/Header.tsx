import React from 'react'

const Header = () => {
  return (
 <>
<header class="bg-gray-100">
      <nav class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between">
          <div class="flex items-center">
            <a href="/">
              <img class="h-12 w-12" src="images/logo.svg" alt="Bookit" />
            </a>
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-4">
                <a
                  href="/"
                  class="rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
                >
                  Rooms
                </a>
                {/* <!-- Logged In Only --> */}
                <a
                  href="/bookings.html"
                  class="rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
                >
                  Bookings
                </a>
                <a
                  href="/add-room.html"
                  class="rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
                >
                  Add Room
                </a>
              </div>
            </div>
          </div>
          {/* <!-- Right Side Menu --> */}
          <div class="ml-auto">
            <div class="ml-4 flex items-center md:ml-6">
              {/* <!-- Logged Out Only --> */}
              <a
                href="login.html"
                class="mr-3 text-gray-800 hover:text-gray-600"
              >
                <i class="fa fa-sign-in"></i> Login
              </a>
              <a
                href="register.html"
                class="mr-3 text-gray-800 hover:text-gray-600"
              >
                <i class="fa fa-user"></i> Register
              </a>
              <a href="my-rooms.html">
                <i class="fa fa-building"></i> My Rooms
              </a>
              <a
                href="login.html"
                class="mx-3 text-gray-800 hover:text-gray-600"
              >
                <i class="fa fa-sign-out"></i> Sign Out
              </a>
            </div>
          </div>
        </div>
      </nav>
{/* 
      <!-- Mobile menu --> */}
      <div class="md:hidden">
        <div class="space-y-1 px-2 pb-3 pt-2 sm:px-3">
          <a
            href="/"
            class="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
          >
            Rooms
          </a>
          {/* <!-- Logged In Only --> */}
          <a
            href="/bookings.html"
            class="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
          >
            Bookings
          </a>
          <a
            href="/add-room.html"
            class="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
          >
            Add Room
          </a>
        </div>
      </div>
    </header>
 </>
  )
}

export default Header
