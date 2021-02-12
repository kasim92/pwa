import { connection } from "./jsstore_con";
import { DATA_TYPE } from "jsstore";

const getDatabase = () => {
    const tblStudent = {
        name: 'Students',
        columns: {
            id: {
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                notNull: true,
                dataType: DATA_TYPE.String
            },
            gender: {
                dataType: DATA_TYPE.String,
                default: 'male'
            },
            country: {
                notNull: true,
                dataType: DATA_TYPE.String
            },
            city: {
                dataType: DATA_TYPE.String,
                notNull: true
            }
        }
    };
    const tblTodos = {
        name: 'Todos',
        columns: {
            id: {
                primaryKey: true,
                autoIncrement: true
            },
            title: {
                notNull: true,
                dataType: DATA_TYPE.String
            },
            isCompleted: {
                dataType: DATA_TYPE.Boolean,
                default: false
            },
        }
    };
    const dataBase = {
        name: "Vue_Demo",
        tables: [tblStudent, tblTodos]
    };
    return dataBase;
};

export const initJsStore = async () => {
    const dataBase = getDatabase();
    return await connection.initDb(dataBase);
};