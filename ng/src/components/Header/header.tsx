import { HeaderContainer, Navigation } from "./style";
import { MdDashboard } from "react-icons/md";
import { IoMdSettings } from 'react-icons/io'
import { BiLogOut, BiTransfer } from 'react-icons/bi'
import { useContext } from "react";
import { Context } from "../../context/AuthContext";
const Header = () => {
  const { logout } = useContext(Context)



  return (
    <HeaderContainer>
      <div className="logo">
        <img
          src="https://s3-alpha-sig.figma.com/img/4ffd/ef3c/5398de643e0be3d16b2a41e83e4c6cd5?Expires=1669593600&Signature=GBr9e1OrF7P-hruaHRqS2oJjQ1t92Ha9kXiMszobQJnP6-md2ApLIAbpP5mZeMUXTh6s1AdXw9Op7haj1vUHkaGljpmsrTBLHeWA7ldUi4MP2plPT5Xs77T5VK~RywNBjBNgO7-Fwkn2MVop1ScwXAmmhW8PTS-v40sBBpX5QrlxsaWjqawD8VC1DUqWO5xYXU3Y8fK4t3HLpG97oobuNMQHxHtulXp-I2J8itJmu8bd2N9rRRk959-6aHPQEa8kh6ZI6IsM42zKdKPSwxRvK-GDrPVzG0h9E8OYAHYkKRD2SlKWHWL6VlMBdPFrmwQF3v2sR0T5EzNkDy~AhPx5kg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          alt=""
        />
        <h1>NG</h1>
      </div>
      <Navigation>
        <ul>
          <li>
            <MdDashboard size={30}/>
            <h3>Dashboard</h3>
          </li>

          <li>
            <BiTransfer size={30}/>
            <h3>Transactions</h3>
          </li>

          <li>
            <IoMdSettings size={30}/>
            <h3>Setings</h3>
          </li>


        </ul>
      </Navigation>

      <div className="container-logout" onClick={() => logout()}>
        <BiLogOut size={30}/>
        <h3>Logout</h3>
      </div>
    </HeaderContainer>
  );
};

export default Header;
