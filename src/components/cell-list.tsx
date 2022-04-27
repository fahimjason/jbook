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
            <AddCell nextCellId={cell.id} />
            <CellListItem key={cell.id} cell={cell} />
        </Fragment>
    );

    return <div>
        {renderedCells}
        <AddCell forceVisible={cells.length === 0} nextCellId={null} />
    </div>
}

export default CellList;