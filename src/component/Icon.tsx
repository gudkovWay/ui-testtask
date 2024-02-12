interface IconProps {
  iconName: "folderOpen" | "folderClose" | "fileTsx" | "fileJs" | "file"
}

export function Icon({ iconName }: IconProps) {
  return (
    <>
      {
        iconName === "folderOpen" ?
          <img src="./folder-open.png" alt="открытая папка" />
          : iconName === "folderClose" ?
            <img src="./folder.png" alt="close folder" />
            : iconName === "fileTsx" ?
              <img src="./logo192.png" alt="tsx" />
              : iconName === "fileJs" ?
                <img src="./js.png" alt="js" />
                : <img src="./file.png" alt="file" />
      }
    </>
  )
} 
