/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-info">
  <a className="navbar-brand " href="#">Birthdays</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Today <span class="sr-only"></span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">This Week</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">This Month</a>
      </li>
    </ul>
  </div>
</nav>
        </div>
    )
}

export default Navbar
