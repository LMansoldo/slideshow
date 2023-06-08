#!/bin/bash

function create-usecase {
    source_folder=$1
    filename="package.json"

    read -p "Enter the new name for the app: " new_folder_name

    cd ".violet/samples"

    rsync -av --exclude 'node_modules/' "$source_folder/" "../../$new_folder_name/"

    echo "Svelte App created successfully!"
    
    cd "../../$new_folder_name" && 
    jq --arg old "$source_folder" --arg new "$new_folder_name" 'walk(if type == "string" then gsub($old;$new) else . end)' "$filename" > "$filename.tmp" && 
    mv "$filename.tmp" "$filename"
}


function create-new-component {
    name=$1
    camelcase_name=$(python -c "import re; print(''.join([i.capitalize() for i in re.split(r'[^\w]+', '${name}')]))")

    touch "src/components/${name}.svelte" && touch "src/routes/+page.svelte"  

    add-component-boilerplate ${name}
    add-page-route ${camelcase_name} ${name}
    add-component-index ${camelcase_name} ${name}
    add-component-stories ${camelcase_name} ${name}
    
    echo "Svelte Component created successfully!"
}


function add-component-boilerplate {
    component_path=$1

    echo '<script lang="ts">
    // Your code here
</script>

<div>
    <!-- Your HTML content here -->
</div>' >> "src/components/${component_path}.svelte"
}


function add-component-stories {
    component_name=$1
    file_name=$2

    touch "../../../src/stories/widgets/${camelcase_name}.stories.ts"  

    echo 'import type { Meta, StoryObj } from "@storybook/svelte"
import { '${component_name}' } from "$widgets/'${file_name}'/src/components";

const meta: Meta<typeof '${component_name}'> = {
	title: "Widgets/'${component_name}'",
	component: '${component_name}'
};
export default meta;
type Story = StoryObj<typeof '${component_name}'>;

export const Component: Story = {};
' >> "../../../src/stories/widgets/${component_name}.stories.ts"
}

function add-page-route {
    camelcase_name=$1
    name=$2

    echo '<script lang="ts">
	import '${camelcase_name}' from "$components/'${name}'.svelte"

</script>

<'${camelcase_name}' />
    ' >> "src/routes/+page.svelte"
}

function add-component-index {
    camelcase_name=$1
    component_name=$2

    touch "src/components/index.ts"

    echo "export { default as ${camelcase_name} } from './${component_name}.svelte'" >> "src/components/index.ts"
}


function install-widgets {
    npm install

    DIR="src/widgets"

    for d in $(find $DIR -type f -name package.json ! -path '*/node_modules/*' -exec dirname {} \;); do
        echo "Running npm install in $d"
        cd "$d" && npm install
        cd ../../..
    done
}

$*