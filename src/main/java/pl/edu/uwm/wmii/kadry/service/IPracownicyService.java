package pl.edu.uwm.wmii.kadry.service;

import pl.edu.uwm.wmii.kadry.dto.PracownikDTO;

import java.util.List;

/**
 * Created by Paweł Dąbrowski on 2016-03-31.
 */
public interface IPracownicyService {

    List<PracownikDTO> findAll();

    void save(PracownikDTO pracownikDTO);

    void delete(Long id);
}
