--
-- Table structure for table `people`
--

CREATE TABLE `people` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for table `people`
--

ALTER TABLE `people`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- AUTO_INCREMENT for table `people`
--

ALTER TABLE `people`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;
