function cuisineSmall() {
    let data = document.getElementById("cuisine-broad").value
    if (data === "asian") {
        return (
            <fieldset>
                <select id="cuisine-small" name="cuisine" required defaultValue={"-"}>
                    <option value="-" disabled>Choose an option</option>
                    <option value="chinese">Chinese</option>
                    <option value="japanese">Japanese</option>
                    <option value="korean">Korean</option>
                </select>
            </fieldset>
        )
    }
    else if (data === "mediterranean") {
        return (
            <fieldset>
                <select id="cuisine-small" name="cuisine" required defaultValue={"-"}>
                    <option value="-" disabled>Choose an option</option>
                    <option value="greek">Greek</option>
                    <option value="italian">Italian</option>
                    <option value="landwer">Cafe Landwer</option>
                </select>
            </fieldset>
        )
    }
    else if (data === "american") {
        return (
            <fieldset>
                <select id="cuisine-small" name="cuisine" required defaultValue={"-"}>
                    <option value="-" disabled>Choose an option</option>
                    <option value="burgers">Burgers</option>
                    <option value="steak">Steak</option>
                </select>
            </fieldset>
        )
    }
}

function locationSmall() {
    let data = document.getElementById("location-broad").value
    if (data === "boston") {
        return (
            <fieldset>
                <select id="location-small" name="location" required defaultValue={"-"}>
                    <option value="-" disabled>Choose an option</option>
                    <option value="newton">Newton</option>
                    <option value="brookline">Brookline</option>
                    <option value="boston">Boston</option>
                </select>
            </fieldset>
        )
    }
    else if (data === "ny") {
        return (
            <fieldset>
                <select id="cuisine-small" name="cuisine" required defaultValue={"-"}>
                    <option value="-" disabled>Choose an option</option>
                    <option value="brooklyn">Brooklyn</option>
                    <option value="manhattan">Manhattan</option>
                </select>
            </fieldset>
        )
    }
}

export default function Home({
    items: string
}) {
    return <main>
        <form action="GET">
            <fieldset>
                <select id="cuisine-broad" name="food" required defaultValue={"-"}>
                    <option value="-" disabled>Choose an option</option>
                    <option value="asian">Asian</option>
                    <option value="mediterranean">Mediterranean</option>
                    <option value="american">American</option>
                </select>
            </fieldset>

            <cuisineSmall />

            <fieldset>
                <select id="location-broad" name="place" required defaultValue={"-"}>
                    <option value="-" disabled>Choose an option</option>
                    <option value="boston">Greater Boston</option>
                    <option value="ny">New York</option>
                </select>
            </fieldset>

            <locationSmall />

        </form>
    </main>
}