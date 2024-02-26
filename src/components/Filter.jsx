import { useTodos } from '../TodosContext';
import './Filter.scss';

function Filter() {
    const store = useTodos();

    return (
    <>
        <div className="filters">
            <div>
                <p>Filtrar por estado</p>
                <div className="badges">
                    <div 
                      className={`badge ${store.filter === "todo" ? "selected" : "" }`}
                      onClick={() => store.setFilter("todo")}
                    >
                        A fazer
                    </div>
                    <div 
                      className={`badge ${store.filter === "done" ? "selected" : "" }`}
                      onClick={() => store.setFilter("done")}
                    >
                        Feito
                    </div>
                    {
                      store.filter && (
                        <span className="clear" onClick={() => store.setFilter("")}>
                            x limpar
                        </span>
                      )
                    }
                </div>
            </div>
        </div>
    </>
    )
  }
  
  export default Filter