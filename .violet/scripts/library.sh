#!/bin/bash

function create-new-component {
    name=$1

    read -p "Enter the new name for the component: " new_component_name
    read -p "Enter the app name to insert component: " app_name

    string_camelcase=$(python -c "import re; print(''.join([i.capitalize() for i in re.split(r'[^\w]+', '${new_component_name}')]))")
    string_lowercase="$(echo ${new_component_name} | sed -e 's/\b\(.\)/\u\1/g' -e 's/ //g')"

    mkdir "${app_name}/src/components/${string_lowercase}" && touch "${app_name}/src/components/${string_lowercase}/${string_lowercase}.svelte" && touch "${app_name}/src/components/${string_lowercase}/index.ts"
    

    add-component-boilerplate ${string_lowercase} ${app_name}
    add-component-index ${string_lowercase} ${string_camelcase} ${app_name}
    insert-component-into-index ${string_camelcase} ${string_lowercase} ${app_name}
    
    echo "Svelte Component created successfully!"
}


function add-component-boilerplate {
    component_path=$1
    app_name=$2

    echo '<script lang="ts">
    // Your code here
</script>

<div>
    <!-- Your HTML content here -->
</div>' >> "${app_name}/src/components/${component_path}/${component_path}.svelte"
}

function add-component-index {
    component_name=$1
    camelcase_name=$2
    app_name=$3

    echo "export { default as ${camelcase_name} } from './${component_name}.svelte'" >> "${app_name}/src/components/${component_name}/index.ts"
}

function insert-component-into-index {
    component_name=$1
    file_name=$2
    app_name=$3

    echo "export * from './${file_name}'" >> "${app_name}/src/components/index.ts"
}

function add-sample-component {
    app_name=$1
    samples_folder=".violet/samples/components"

    # Verificar se a pasta existe
    if [ -d "$samples_folder" ]; then
        # Listar os diretórios
        echo "Available components:"
        ls -l "$samples_folder" | grep "^d"
    else
        echo "$samples_folder doesn't exists."
    fi

    read -p "Enter the component name: " selected_component
    echo $selected_component
    echo $app_name
    cd $samples_folder

    rsync -av "$selected_component" "../../../$app_name/src/components"

    echo "${selected_component} created successfully!"
}

$*