
export const DashboardPageTitleBar = ({ dashboardSidebar, setDashboardSidebar, title }: any) => {
    return (
        <div className="mb-[40px]">
            <div>
                <h2 className="text-[26px] text-blue font-medium  capitalize tracking-wider">{title}</h2>
                <p className="text-[13px] text-purple">Ready to jump back in?</p>
                <button onClick={() => setDashboardSidebar(true)}>OPen</button>
            </div>
        </div>
    )
}

