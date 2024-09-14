"uss client"
import { useState } from "react";
import { motion } from "framer-motion";

const MegaMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="relative">
            {/* Main Menu */}
            <div className="flex items-center space-x-4">
                <button
                    className="px-4 py-2 text-lg font-semibold bg-gray-100 rounded-md hover:bg-gray-200"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    Menu
                </button>
            </div>

            {/* Mega Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="absolute left-0 w-full p-6 mt-4 bg-white shadow-lg"
                >
                    <div className="grid grid-cols-4 gap-6">
                        {/* Column 1 */}
                        <div>
                            <h4 className="mb-2 text-lg font-bold">Awards</h4>
                            <ul>
                                <li className="py-1 text-gray-600 hover:text-gray-800">Honor Mentions</li>
                                <li className="py-1 text-gray-600 hover:text-gray-800">Nominees</li>
                                <li className="py-1 text-gray-600 hover:text-gray-800">Sites of the Year</li>
                            </ul>
                        </div>

                        {/* Column 2 */}
                        <div>
                            <h4 className="mb-2 text-lg font-bold">By Category</h4>
                            <ul>
                                <li className="py-1 text-gray-600 hover:text-gray-800">Sites of the Day</li>
                                <li className="py-1 text-gray-600 hover:text-gray-800">Sites of the Month</li>
                                <li className="py-1 text-gray-600 hover:text-gray-800">Sites of the Year</li>
                            </ul>
                        </div>

                        {/* Column 3 */}
                        <div>
                            <h4 className="mb-2 text-lg font-bold">By Technology</h4>
                            <ul>
                                <li className="py-1 text-gray-600 hover:text-gray-800">Webflow</li>
                                <li className="py-1 text-gray-600 hover:text-gray-800">React</li>
                                <li className="py-1 text-gray-600 hover:text-gray-800">Next.js</li>
                            </ul>
                        </div>

                        {/* Column 4 */}
                        <div>
                            <h4 className="mb-2 text-lg font-bold">Blog</h4>
                            <ul>
                                <li className="py-1 text-gray-600 hover:text-gray-800">Latest Articles</li>
                                <li className="py-1 text-gray-600 hover:text-gray-800">Honors of the Year</li>
                                <li className="py-1 text-gray-600 hover:text-gray-800">Jury Picks 2024</li>
                            </ul>
                        </div>
                    </div>
                </motion.div>
            )}
        </nav>
    );
};

export default MegaMenu;
