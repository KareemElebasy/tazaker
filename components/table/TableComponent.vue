<template>
    <div>
        <table class="custom-table border-solid	border-slate-400 border-2	 border-collapse w-[100%]" dir="ltr">
        <thead>
          <tr>
            <th v-for="(column, index) in columns" :key="index" class="font-bold">
              {{ column }}
            </th>
            
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, rowIndex) in data" :key="rowIndex">
            <td v-for="(item, colIndex) in row" :key="colIndex">
              {{ item }}
            </td>
          </tr>
        </tbody>
      </table>
      <button class="base-btn" @click="addColumn">+</button>

    </div>
  </template>
  
  <script>
  
  export default {
    data() {
      return {
        columns: ["Song", "Artist", "Year"],
        data: [
          {
            Song: "The Sliding Mr. Bones (Next Stop, Pottersville)",
            Artist: "Malcolm Lockyer",
            Year: "1961",
            editing: false,

          },
          {
            Song: "Witchy Woman",
            Artist: "The Eagles",
            Year: "1972",
            editing: false,
          },
          {
            Song: "Shining Star",
            Artist: "Earth, Wind, and Fire",
            Year: "1975",
            editing: false,
          }
        ]
      };
    },
    methods: {
      addColumn() {
        const newColumn = prompt("Enter the name of the new column:");
        if (newColumn) {
          this.columns.push(newColumn);
          this.data.forEach((row) => {
            row[newColumn] = "";
          });
          this.saveColumnsToLocalStorage();
        }
      },
      saveColumnsToLocalStorage() {
        localStorage.setItem("columns", JSON.stringify(this.columns));
      }
    },
    created() {
      const storedColumns = localStorage.getItem("columns");
      if (storedColumns) {
        this.columns = JSON.parse(storedColumns);
      }
    }
  };
  </script>
<style >
.custom-table th,
.custom-table td {
  padding: 8px 12px;
  border: 1px solid #ccc;
}

.custom-table th {
  background-color: #f2f2f2;
}

.custom-table tbody tr:hover {
  background-color: #f5f5f5;
}

.custom-table th:last-child,
.custom-table td:last-child {
  text-align: center;
}
</style>
