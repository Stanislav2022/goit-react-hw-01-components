function StatisticsList({ items }) {
    <ul className="stat-list">
        {items.map(item => {
            <li className="item">
                <span className="label">.docx</span>
                <span className="percentage">4%</span>
            </li>
        })}
    </ul>
}