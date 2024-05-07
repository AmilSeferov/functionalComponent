import { Link } from "react-router-dom";

export function Nav(){
    return<>
    <ul>
        <li ><Link className="nav-link" to="/animals">
      cat
     </Link></li>
     <li ><Link className="nav-link" to="/people">
       person
     </Link></li>
      <li ><Link className="nav-link" to="/plants">
      plant
     </Link></li>
    </ul>
    </>
}