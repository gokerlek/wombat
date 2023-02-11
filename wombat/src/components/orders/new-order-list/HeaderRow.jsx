const HeaderRow = ({ name, total }) => (
  <div className="flex flex-row justify-between p-4">
    <div className="">{name}</div>

    {total + " TL"}
  </div>
);

export default HeaderRow;
