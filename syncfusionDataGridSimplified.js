import * as React from "react";

import {
    ColumnDirective,
    GridComponent,
    Inject,
    Resize,
    Toolbar,
    ColumnChooser,
    Sort,
    ColumnMenu,
    Filter,
    Page,
    Edit,
    Selection,
    ExcelExport,
} from "@syncfusion/ej2-react-grids";



const SimpleViewtable = () => {

    const toolbarOptions = [
        "ColumnChooser",
        "Search",
        "Edit",
        "Update",
        "Cancel",
        "ExcelExport",
    ];
    return (
        <>
            <GridComponent
                dataSource={data}
                allowResizing={true}
                wrapText={true}
                height="100%"
                gridLines="Both"
                editSettings={editSettings}
                selectionSettings={selectionsettings}
                allowTextWrap={true}
                showColumnChooser={true}
                toolbar={toolbarOptions}
                allowExcelExport={true}
                allowPaging={true}
                rowHeight={30}
                pageSettings={{ pageCount: 4, pageSizes: true }}
                allowSorting={true}
                allowFiltering={true}
                showColumnMenu={true}
                filterSettings={filterSettings}
                rowSelected={rowSelected}
            >
                <ColumnDirective
                    type="checkbox"
                    maxWidth="60"
                />
                <Inject
                    services={[
                        Resize,
                        ExcelExport,
                        Selection,
                        Toolbar,
                        Edit,
                        ColumnChooser,
                        Sort,
                        Page,
                        ColumnMenu,
                        Filter,
                    ]}
                />
            </GridComponent>
        </>
    );
};



