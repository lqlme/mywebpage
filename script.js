// 数据定义
const groups = [
    {
        group: "1组",
        students: [
            { name: "庄晨悦", team: "A队" },
            { name: "吴远杭", team: "B队" },
            { name: "王俊钦", team: "C队" },
            { name: "侯馨雅", team: "D队" },
            { name: "张艺峒", team: "E队" },
            { name: "杨哲", team: "F队" },
            { name: "曾凯潞", team: "G队" },
            { name: "刘可馨", team: "H队" }
        ]
    },
    {
        group: "2组",
        students: [
            { name: "何雨佳", team: "A队" },
            { name: "陈奕心", team: "B队" },
            { name: "沈韩", team: "C队" },
            { name: "王艺潼", team: "D队" },
            { name: "张嘉逸", team: "E队" },
            { name: "刘子豪", team: "F队" },
            { name: "颜硕祎", team: "G队" },
            { name: "朱君浩", team: "H队" }
        ]
    },
  {
        group: "3组",
        students: [
            { name: "朱圆圆", team: "A队" },
            { name: "张家森", team: "B队" },
            { name: "陆忆涵", team: "C队" },
            { name: "姜海洋", team: "D队" },
            { name: "尤雨欣", team: "E队" },
            { name: "时明蕊", team: "F队" },
            { name: "董宝玉", team: "G队" }, 
            { name: "李阳", team: "H队" }
        ]
    },
 {
        group: "4组",
        students: [
            { name: "刘勋", team: "A队" },
            { name: "宋时雨", team: "B队" },
            { name: "徐凯瑞", team: "C队" },
            { name: "陈诗蕾", team: "D队" },
            { name: "任文惠", team: "E队" },
            { name: "陈奕洁", team: "F队" },
            { name: "张紫瑶", team: "G队" }, 
            { name: "董可", team: "H队" }
        ]
    },
{
        group: "5组",
        students: [
            { name: "苗艾雅", team: "A队" },
            { name: "袁子韵", team: "B队" },
            { name: "郝星阳", team: "C队" },
            { name: "季慕晨", team: "D队" },
            { name: "胡熙乔", team: "E队" },
            { name: "柴宇涵", team: "F队" },
            { name: "孙纯", team: "G队" }, 
            { name: "程美妍", team: "H队" }
        ]
    },
{
        group: "6组",
        students: [
            { name: "李雨轩", team: "A队" },
            { name: "曾子恒", team: "B队" },
            { name: "张子全", team: "C队" },
            { name: "王馨宇", team: "D队" },
            { name: "顾子昌", team: "E队" },
            { name: "董煜", team: "F队" },
            { name: "张珈亿", team: "G队" }, 
            { name: "吴闯", team: "H队" }
        ]
    },
{
        group: "7组",
        students: [
            { name: "单立峰", team: "A队" },
            { name: "李东博", team: "B队" },
            { name: "于丽", team: "C队" },
            { name: "张峻滔", team: "D队" },
            { name: "唐文浩", team: "E队" },
            { name: "岳雨泽", team: "F队" },
            { name: "何孟龙", team: "G队" }, 
            { name: "刘若楠", team: "H队" }
        ]
    },
{
        group: "8组",
        students: [
            { name: "袁一鸣", team: "A队" },
            { name: "郭家卫", team: "B队" },
            { name: "任可馨", team: "C队" },
            { name: "张楚", team: "D队" },
            { name: "袁子彤", team: "E队" },
            { name: "冯浩", team: "F队" },
            { name: "", team: "G队" },  // 空一个
            { name: "陆恩硕", team: "H队" }
        ]
    },
    // 其他组数据...
    // 3组到8组的数据可以按照相同格式补充
];

// 初始化次数统计
const counts = {};
groups.forEach(group => {
    group.students.forEach(student => {
        if (student.name) {
            counts[student.name] = 0;
        }
    });
});

// 获取表格主体
const tableBody = document.querySelector("#statTable tbody");

// 动态生成表格
groups.forEach(group => {
    const row = document.createElement("tr");

    // 组别
    const groupCell = document.createElement("td");
    groupCell.textContent = group.group;
    row.appendChild(groupCell);

    // 学生数据
    group.students.forEach(student => {
        const studentCell = document.createElement("td");
        if (student.name) {
            const studentDiv = document.createElement("div");
            studentDiv.className = "student";

            // 姓名
            const nameDiv = document.createElement("div");
            nameDiv.className = "name";
            nameDiv.textContent = student.name;
            studentDiv.appendChild(nameDiv);

            // 加减按钮
            const controlsDiv = document.createElement("div");
            controlsDiv.className = "controls";

            const minusButton = document.createElement("button");
            minusButton.className = "minus";
            minusButton.textContent = "-";
            minusButton.addEventListener("click", () => {
                if (counts[student.name] > 0) {
                    counts[student.name]--;
                    countDiv.textContent = counts[student.name];
                    updateTotals();
                }
            });

            const countDiv = document.createElement("div");
            countDiv.className = "count";
            countDiv.textContent = counts[student.name];

            const plusButton = document.createElement("button");
            plusButton.className = "plus";
            plusButton.textContent = "+";
            plusButton.addEventListener("click", () => {
                counts[student.name]++;
                countDiv.textContent = counts[student.name];
                updateTotals();
            });

            controlsDiv.appendChild(minusButton);
            controlsDiv.appendChild(countDiv);
            controlsDiv.appendChild(plusButton);
            studentDiv.appendChild(controlsDiv);
            studentCell.appendChild(studentDiv);
        }
        row.appendChild(studentCell);
    });

    // 组总次数
    const totalCell = document.createElement("td");
    totalCell.className = "group-total";
    totalCell.textContent = "0";
    row.appendChild(totalCell);

    tableBody.appendChild(row);
});

// 添加“总次数”行
const totalRow = document.createElement("tr");
totalRow.id = "totalRow";
const totalLabelCell = document.createElement("td");
totalLabelCell.textContent = "总次数";
totalLabelCell.style.fontWeight = "bold";
totalRow.appendChild(totalLabelCell);

// 初始化每列的总次数
const columnTotals = new Array(8).fill(0);

// 为每列添加总次数单元格
for (let i = 0; i < 8; i++) {
    const totalCell = document.createElement("td");
    totalCell.className = "column-total";
    totalCell.textContent = "0";
    totalRow.appendChild(totalCell);
}

// 总计单元格
const grandTotalCell = document.createElement("td");
grandTotalCell.className = "grand-total";
grandTotalCell.textContent = "0";
grandTotalCell.style.fontWeight = "bold";
totalRow.appendChild(grandTotalCell);

tableBody.appendChild(totalRow);

// 更新总次数
function updateTotals() {
    // 重置每列的总次数
    columnTotals.fill(0);

    // 遍历每一行，更新每列的总次数和每行的组总次数
    const rows = document.querySelectorAll("#statTable tbody tr:not(#totalRow)");
    rows.forEach(row => {
        const cells = row.querySelectorAll(".count");
        let rowTotal = 0; // 每行的组总次数

        cells.forEach((cell, index) => {
            const count = parseInt(cell.textContent) || 0;
            rowTotal += count;
            columnTotals[index] += count; // 更新每列的总次数
        });

        // 更新每行的组总次数
        row.querySelector(".group-total").textContent = rowTotal;
    });

    // 更新“总次数”行
    const totalRowCells = document.querySelectorAll("#totalRow .column-total");
    totalRowCells.forEach((cell, index) => {
        cell.textContent = columnTotals[index];
    });

    // 更新总计次数
    const grandTotal = columnTotals.reduce((sum, total) => sum + total, 0);
    document.querySelector("#totalRow .grand-total").textContent = grandTotal;
}

// 添加下载按钮
const downloadButton = document.createElement("button");
downloadButton.textContent = "下载数据";
downloadButton.style.margin = "20px auto";
downloadButton.style.display = "block";
downloadButton.style.padding = "10px 20px";
downloadButton.style.fontSize = "16px";
downloadButton.style.backgroundColor = "#4CAF50";
downloadButton.style.color = "white";
downloadButton.style.border = "none";
downloadButton.style.borderRadius = "5px";
downloadButton.style.cursor = "pointer";
downloadButton.addEventListener("click", downloadData);
document.body.appendChild(downloadButton);

// 下载数据为 CSV 文件
function downloadData() {
    let csvContent = "组别,A队姓名,A队次数,B队姓名,B队次数,C队姓名,C队次数,D队姓名,D队次数,E队姓名,E队次数,F队姓名,F队次数,G队姓名,G队次数,H队姓名,H队次数,组总次数\n";

    groups.forEach(group => {
        const rowData = [group.group];
        group.students.forEach(student => {
            rowData.push(student.name || ""); // 姓名
            rowData.push(counts[student.name] || 0); // 次数
        });
        // 计算组总次数
        const total = group.students.reduce((sum, student) => sum + (counts[student.name] || 0), 0);
        rowData.push(total);
        csvContent += rowData.join(",") + "\n";
    });

    // 添加“总次数”行到 CSV
    const totalRowData = ["总次数"];
    columnTotals.forEach(total => {
        totalRowData.push("", total); // 队伍名称留空，只保留次数
    });
    const grandTotal = columnTotals.reduce((sum, total) => sum + total, 0);
    totalRowData.push(grandTotal);
    csvContent += totalRowData.join(",") + "\n";

    // 创建 Blob 并下载
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "答题次数统计.csv";
    link.click();
}