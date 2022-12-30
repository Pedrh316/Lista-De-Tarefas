import formatter from "../../controllers/formatter";
import { useParams } from "react-router-dom";

const View = () => {
    const {id} = useParams()

    const allTasks = JSON.parse(localStorage.getItem(tasks));
    const text = allTasks.find(task => task.id === id);
    const formattedText = formatter(text);

    return (
        <article>
            {formattedText}
        </article>
    )
}

export default View;