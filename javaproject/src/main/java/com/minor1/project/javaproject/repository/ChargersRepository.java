package com.minor1.project.javaproject.repository;

import com.minor1.project.javaproject.entity.Chargers;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ChargersRepository extends JpaRepository<Chargers, Long> {
}
