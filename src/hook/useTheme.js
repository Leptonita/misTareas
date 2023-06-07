import { useState } from "react";
import { light, dark, happy } from '../styles/Theme.styled';

const useTheme = (initialTheme) => {
    const [selectedTheme, setSelectedTheme] = useState(initialTheme);

    const toggleTheme = () => {
        //(selectedTheme === light) ? setSelectedTheme(dark) : setSelectedTheme(light);
        if (selectedTheme === light) {
            setSelectedTheme(dark);
        } else if (selectedTheme === dark) {
            setSelectedTheme(happy);
        } else {
            setSelectedTheme(light);
        }
    }

    return { selectedTheme, setSelectedTheme, toggleTheme }
}

export default useTheme;