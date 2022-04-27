import { useTypedSelector } from "../hooks/use-typed-selector";
import CellListItem from "./cell-list-item";

const CellList: React.FC = () => {
    // @ts-ignore
    const cells = useTypedSelector(({ cells: { order, data } }) => order.map(id => data[id]));

    // @ts-ignore
    const renderedCells = cells.map(cell => <CellListItem key={cell.id} cell={cell} />);

    return <div>{renderedCells}</div>
}

export default CellList;