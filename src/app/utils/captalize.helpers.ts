export function capitalize(name:string):string{
    return name.charAt(0).toUpperCase() + name.slice(1).toLocaleLowerCase()
}