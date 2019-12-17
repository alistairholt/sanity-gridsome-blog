export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5df828acca99b00c961c5020',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-dcmd4w3i',
                  apiId: 'ae0fe6bd-276c-4ed9-b311-0367276d4352'
                },
                {
                  buildHookId: '5df828accd781f6b9d61b54e',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-r19ksdqe',
                  apiId: '06e07be9-52a1-4735-9a86-eec5928b95c9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/alistairholt/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-r19ksdqe.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
