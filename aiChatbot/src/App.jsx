import React from 'react'

const App = () => {
  return (
    <>
      <div className='main h-screen w-full py-5 px-5'>
        <div className='content flex justify-between h-full w-full'>
          <div className='left w-[27%] h-full rounded-2xl overflow-hidden'>
            <nav className='w-full h-16 bg-gray-300 mb-6'></nav>
            <div className='nav-content h-96 w-full mt-6 p-3'>
              <div className='home h-1/5 w-full rounded-xl flex items-center justify-start px-5'>
                <h1 className='text-3xl font-medium'>Home</h1>
              </div>
              <div className='home h-1/5 w-full mt-6 rounded-xl flex items-center justify-start px-5'>
                <h1 className='text-3xl font-medium'>Ticket History</h1>
              </div>
              <div className='home h-1/5 w-full mt-6 rounded-xl flex items-center justify-start px-5'>
                <h1 className='text-3xl font-medium'>Available Slots</h1>
              </div>
              <div className='home h-1/5 w-full mt-6 rounded-xl flex items-center justify-start px-5'>
                <h1 className='text-3xl font-medium'>Help</h1>
              </div>
            </div>
          </div>
          <div className='right w-[71%] h-full bg-blue-300 rounded-2xl overflow-hidden'>
            <nav className='w-full h-16 bg-gray-300 flex items-center justify-end'>
              <div className='h-full w-80 flex items-center justify-center'>
                <div className='h-[75%] w-72 bg-gray-300 rounded-3xl border border-black flex items-center justify-start px-1'>
                  <div className='h-[85%] w-[15%] rounded-full overflow-hidden'><img className='object-cover' src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
                  <h2 className='font-medium ml-3 text-lg'>User Name</h2>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}

export default App