 function Navigation  ()  {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>      
          <a className='navbar-brand page-scroll' href='#page-top'>
            Mod-2 Project react
          </a>
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'>
          <ul className='nav navbar-nav navbar-right'>
          <li>
              <a href='#coin' className='page-scroll'>
                Crypto
              </a>
            </li>
            <li>
              <a href='#contact' className='page-scroll'>
                Contacts
              </a>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  )
}
export default Navigation