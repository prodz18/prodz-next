import { BiUser, BiBriefcase, BiTable } from 'react-icons/bi';

export const structure = (S: any) => 
    S.list()
        .title('MAIN MENU')
        .items([
            // PROFILE
            S.documentListItem()
                .title('Profile')
                .schemaType('profile')
                .icon(BiUser),

            // SKILLS
            S.listItem()
                .title("Skills & Toolset")
                .schemaType('skills')
                .icon(BiBriefcase)
                .child(
                    S.documentList()
                        .title('Skills & Toolset')
                        .filter('_type == "skills"')
                        .defaultOrdering([{field: "title", direction: "asc"}])
                        .menuItems([
                            S.orderingMenuItem({title: 'Title, A-Z', name: 'title, A-Z', by: [{field: "title", direction: "asc"}]}),
                            S.orderingMenuItem({title: 'Title, Z-A', name: 'title, Z-A', by: [{field: "title", direction: "desc"}]}),
                            S.orderingMenuItem({title: 'Last edited', name: 'Last edited', by: [{field: "_updatedAt", direction: "desc"}]}),
                        ])
                ),
            
            // PROJECTS
            S.listItem()
                .title("Projects")
                .schemaType('projects')
                .icon(BiTable)
                .child(
                    S.documentList()
                        .title('Projects')
                        .filter('_type == "projects"')
                        .defaultOrdering([{field: "_createdAt", direction: "desc"}])
                        .menuItems([
                            S.orderingMenuItem({title: 'Created', name: 'created', by: [{field: "_createdAt", direction: "desc"}]}),
                            S.orderingMenuItem({title: 'Last edited', name: 'Last edited', by: [{field: "_updatedAt", direction: "desc"}]}),
                            S.orderingMenuItem({title: 'Title, A-Z', name: 'title, A-Z', by: [{field: "title", direction: "asc"}]}),
                            S.orderingMenuItem({title: 'Title, Z-A', name: 'title, Z-A', by: [{field: "title", direction: "desc"}]}),
                        ])
                ),
        ])
    