import React from 'react'
import SearchForm from '../components/SearchForm'
import ResultsGrid from '../components/ResultsGrid'

type Props = {}

const AlbumSearchView = (props: Props) => {
  return (
    <div>
        {/* .grid.gap-5>div*2 */}
        <div className="grid gap-5">
            <div>
                <SearchForm/>
            </div>
            <div>
                <ResultsGrid/>
            </div>
        </div>

    </div>
  )
}

export default AlbumSearchView