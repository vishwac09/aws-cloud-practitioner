import {CertificationList} from '../features/certification';

function Sidebar() {
  return (
    <div className="sidebar w-100 h-100">
      <div className="sidebar-nav">
        <CertificationList />
      </div>
    </div>
  );
}

export {Sidebar};
