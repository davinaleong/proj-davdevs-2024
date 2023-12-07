export function nl2br(string: string): string {
    return string.replace(/(?:\r\n|\r|\n)/g, '<br/>')
}

export function sort(array: any, key: string): any {
    const sorted: any = [...array]
    return sorted.sort((a: any, b: any) => {
        const A = a[key]
        const B = b[key]
    
        let comparison = 0
        if (A > B) {
            comparison = 1
        } else if (A < B) {
            comparison = -1
        } else {
            comparison = 0
        }
    
        return comparison
    })
}

export function sortDesc(array: any, key: string): any {
    const sorted: any = [...array]
    return sorted.sort((a: any, b: any) => {
        const A = a[key]
        const B = b[key]
    
        let comparison = 0
        if (A > B) {
            comparison = -1
        } else if (A < B) {
            comparison = 1
        } else {
            comparison = 0
        }
    
        return comparison
    })
}

export function sortPosts(array: any, key: string): any {
    const sorted: any = [...array]
    return sorted.sort((a: any, b: any) => {
        const A = a.frontmatter[key]
        const B = b.frontmatter[key]
    
        let comparison = 0
        if (A > B) {
            comparison = 1
        } else if (A < B) {
            comparison = -1
        } else {
            comparison = 0
        }
    
        return comparison
    })
}

export function sortPostsDesc(array: any, key: string): any {
    const sorted: any = [...array]
    return sorted.sort((a: any, b: any) => {
        const A = a.frontmatter[key]
        const B = b.frontmatter[key]
    
        let comparison = 0
        if (A > B) {
            comparison = -1
        } else if (A < B) {
            comparison = 1
        } else {
            comparison = 0
        }
    
        return comparison
    })
}