import './cell-list.css'
import { Fragment } from "react";
import { useTypedSelector } from "../hooks/use-typed-selector";
import CellListItem from "./cell-list-item";
import AddCell from "./add-cell";

const CellList: React.FC = () => {
    // @ts-ignore
    const cells = useTypedSelector(({ cells: { order, data } }) => order.map(id => data[id]));

    // @ts-ignore
    const renderedCells = cells.map(cell =>
        <Fragment key={cell.id}>
            <CellListItem key={cell.id} cell={cell} />
            <AddCell previousCellId={cell.id} />
        </Fragment>
    );

    return (
        <div className="cell-list">
            <AddCell forceVisible={cells.length === 0} previousCellId={null} />
            {renderedCells}
        </div>
    );
}

export default CellList;